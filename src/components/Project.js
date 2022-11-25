import React, { useState } from 'react';

function Project(props) {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    }

    const handleMouseLeave = () => {
        setIsHovering(false);
    }

    const styles = {
        container2: {
            display: 'flex',
            justifyContent: 'space-between',
            marginLeft: '10%'
        },
        linkSpacing: {
            marginRight: '10%',
        },
        list: {
            marginBottom: '10rem'
        }
    }

    return (
        <ul style={styles.list} className="list-group">
            {props.projects.map(item => (
                <li className="list-group-item" key={item.id}>
                    <div>
                        <h5>{item.name}</h5>
                        <div className='project'>
                            <div className="imageContainer">
                                <img src="https://via.placeholder.com/300"/>
                                <div className="overlay" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                    <div className="overlayText">Hello World</div>
                                </div>
                            </div>
                            <div style={styles.container2} className="links">
                                <p style={styles.linkSpacing}>Linkes Go here</p>
                                <p style={styles.linkSpacing}>Eventually</p>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default Project;