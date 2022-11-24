import React from 'react';

function Project(props) {
    // const { projName, projImg, projLink } = props;

    return (
        // <a href={projLink}>
        //     <section>
        //         <img src={projImg} />
        //             <div class="overlay">
        //                 <div>{projName}</div>
        //             </div>
        //     </section>
        // </a>
        <ul className="list-group">
            {props.projects.map(item => (
                <li className="list-group-item" key={item.id}>
                    {item.name}
                </li>
            ))}
        </ul>
    );
}

export default Project;