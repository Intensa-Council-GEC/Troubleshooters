// import Bill from './Bill';
import React, { useState } from 'react';
// import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';


import { ref, set } from 'firebase/database';
import { db, auth } from '../firebase';
import { uid } from 'uid';
import Bill from './Bills/Bills';
import Expense from './Bills/Expense';
import Income from './Bills/Income';







function Bills() {


    const [activeButton, setActiveButton] = useState('button1');

    const handleClick = (buttonName) => {
        setActiveButton(buttonName);
    }

    return (
        <section>
            <nav>
                <h2>Bill Details</h2>
            </nav>
            <div>
                <button onClick={() => handleClick('button1')}>
                    Expenses
                </button>
                <button onClick={() => handleClick('button2')}>
                    Income
                </button>
                <button onClick={() => handleClick('button3')}>
                    Bill
                </button>

                {activeButton === 'button1' && <Expense  />}
                {activeButton === 'button2' && <Income />}
                {activeButton === 'button3' && <Bill />}
            </div>
            {/* <Bill type={isToggled ? 'Income' : 'Expense'} /> */}
        </section>
    );
}

export default Bills;