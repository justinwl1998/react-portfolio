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
            marginLeft: '5%'
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
                        {/* <h5>{item.name}</h5> */}
                        <div className='project'>
                            <div className="imageContainer">
                                <a href={item.link}>
                                    <img src={item.image}/>
                                    <div className="overlay" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                        <div className="overlayText">{item.name}</div>
                                    </div>
                                </a>
                            </div>
                            <div style={styles.container2} className="links">
                                <a href={item.github}>
                                    <div className="link">
                                        <i className="devicon-github-original"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default Project;