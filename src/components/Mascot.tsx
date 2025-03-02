import React, { useState, useEffect, useRef } from 'react';
import './Mascot.css';

interface MascotProps {
  className?: string;
  shouldPresentBubbleAndMenu?: boolean;
}

const Mascot: React.FC<MascotProps> = ({ className, shouldPresentBubbleAndMenu = true }) => {
  const [message, setMessage] = useState('');
  const [bubbleVisible, setBubbleVisible] = useState(false);
  const [mascotType, setMascotType] = useState(() => {
    const savedMascot = localStorage.getItem('vibe-code-mascot');
    return savedMascot || 'default';
  });
  const [showMascotMenu, setShowMascotMenu] = useState(false);
  
  // Use ref for interval to prevent issues with cleanup
  const messageIntervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Available mascot options
  const mascotOptions = [
    { id: 'default', face: '(◕‿◕)', name: 'Default' },
    { id: 'happy', face: '(＾▽＾)', name: 'Happy' },
    { id: 'excited', face: '(ﾟДﾟ)', name: 'Excited' },
    { id: 'cat', face: '(=^･ω･^=)', name: 'Cat' },
    { id: 'bear', face: 'ʕ•ᴥ•ʔ', name: 'Bear' },
    { id: 'dog', face: '(ᵔᴥᵔ)', name: 'Dog' }
  ];

  // Get a mascot based on app state
  const getMascotContent = () => {
    const selectedMascot = mascotOptions.find(m => m.id === mascotType);
    return selectedMascot ? selectedMascot.face : '(◕‿◕)';
  };

  // Save mascot selection to localStorage
  useEffect(() => {
    localStorage.setItem('vibe-code-mascot', mascotType);
  }, [mascotType]);

  // Get appropriate welcome message
  const getRandomMessage = () => {
    const messages = [
      'Welcome to VibeCode!',
      'We create amazing AI-powered solutions!',
      'Let us bring your ideas to life!',
      'Ready to transform your business with AI?',
      'Specialized in agentic AI development!',
      'Your AI partner for success!',
      'AI-driven development at its best!',
      'Innovation starts here!',
      'Let\'s build the future together!',
      'AI + Creativity = VibeCode Magic!'
    ];
    
    return messages[Math.floor(Math.random() * messages.length)];
  };

  // Set up and clean up the message display interval
  useEffect(() => {
    // Initial message after a short delay
    const initialTimeout = setTimeout(() => {
      setMessage(getRandomMessage());
      setBubbleVisible(true);
      
      // Hide after a few seconds
      setTimeout(() => {
        setBubbleVisible(false);
      }, 5000);
    }, 1000);
    
    // Set up interval for random messages
    messageIntervalRef.current = setInterval(() => {
      // Only 20% chance to show a message to reduce frequency
      if (Math.random() > 0.8) {
        setMessage(getRandomMessage());
        setBubbleVisible(true);
        
        // Hide the bubble after a few seconds
        setTimeout(() => {
          setBubbleVisible(false);
        }, 5000);
      }
    }, 30000);
    
    // Clean up function
    return () => {
      clearTimeout(initialTimeout);
      if (messageIntervalRef.current) {
        clearInterval(messageIntervalRef.current);
      }
    };
  }, []);

  // Toggle the mascot visibility when clicked
  const toggleMascot = () => {
    if (bubbleVisible) {
      // If bubble is visible, hide it
      setBubbleVisible(false);
    } else {
      // Otherwise show a new message
      setMessage(getRandomMessage());
      setBubbleVisible(true);
      
      // Auto-hide after 5 seconds
      setTimeout(() => {
        setBubbleVisible(false);
      }, 5000);
    }
  };
  
  // Long press handler to show mascot menu
  const handleLongPress = () => {
    setShowMascotMenu(true);
    setBubbleVisible(false);
  };
  
  // Change the mascot type
  const changeMascot = (type: string) => {
    setMascotType(type);
    setShowMascotMenu(false);
    
    // Show a confirmation message
    setMessage(`Mascot changed to ${mascotOptions.find(m => m.id === type)?.name}!`);
    setBubbleVisible(true);
    
    // Hide the message after a few seconds
    setTimeout(() => {
      setBubbleVisible(false);
    }, 3000);
  };

  return (
    <div className={`mascot ${className || ''}`}>
      {shouldPresentBubbleAndMenu && (
        <div 
          className={`mascot-bubble ${bubbleVisible ? 'visible' : ''}`}
        >
          {message}
        </div>
      )}
      
      {shouldPresentBubbleAndMenu && showMascotMenu && (
        <div className="mascot-menu">
          <div className="mascot-menu-title">Choose your mascot:</div>
          <div className="mascot-options">
            {mascotOptions.map((option) => (
              <button 
                key={option.id}
                className={`mascot-option ${mascotType === option.id ? 'active' : ''}`}
                onClick={() => changeMascot(option.id)}
              >
                <span className="mascot-option-face">{option.face}</span>
                <span className="mascot-option-name">{option.name}</span>
              </button>
            ))}
          </div>
          <button 
            className="mascot-menu-close"
            onClick={() => setShowMascotMenu(false)}
          >
            Close
          </button>
        </div>
      )}
      
      <div 
        className="mascot-face"
        onClick={toggleMascot}
        onContextMenu={(e) => {
          e.preventDefault();
          handleLongPress();
        }}
        onTouchStart={() => {
          const timer = setTimeout(() => {
            handleLongPress();
          }, 800); // Long press after 800ms
          return () => clearTimeout(timer);
        }}
      >
        {getMascotContent()}
      </div>
    </div>
  );
};

export default Mascot; 