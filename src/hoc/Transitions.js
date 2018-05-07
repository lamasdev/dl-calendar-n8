import React from 'react';
import Transition from 'react-transition-group/Transition';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
};

const Fade = (props) => {
    return (
        <Transition in={true} timeout={duration}>
            {(state) => (
                <div style={{
                    ...defaultStyle,
                    ...transitionStyles[state],
                    
                }}
                {...props}
                >
                </div>
            )}
        </Transition>
    )
}

export default Fade;
