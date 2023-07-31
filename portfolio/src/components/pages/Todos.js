import React, { useState } from 'react';

function Todos() {
    return (
        <div className="todos">
            <h4>TODOS:</h4>
            <ul>
                <li className="todoText">design header</li>
                <li className="todoText">design footer</li>
                <li className="todoText">create about me section</li>
                <li className="todoText">create contact form</li>
                <ul className="todoText"><li className="todoText">doesn't have to work</li></ul>
                <li className="todoText">create downloadable resume?</li>
            </ul>
            <h4>/TODOS</h4>
        </div>
    );
}

export default Todos;