import React from 'react';

const styles = {
    container1: {
        display: 'flex',
        // justifyContent: 'space-around',
        alignItems: 'center'
    },
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

function Project(props) {

    return (
        <ul style={styles.list} className="list-group">
            {props.projects.map(item => (
                <li className="list-group-item" key={item.id}>
                    <div>
                        <h5>{item.name}</h5>
                        <div style={styles.container1} className='project'>
                            <img src="https://via.placeholder.com/300"/>
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