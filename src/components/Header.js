import React from 'react'

const Header = ({ handleToggleDarkMode }) => {
    return (
        <div className="header">
            <h1>myNotes</h1>
            <button className="toggleButton" onClick={() => handleToggleDarkMode((previousMode) => !previousMode)}>Toggle Mode</button>
        </div>
    )
}

export default Header