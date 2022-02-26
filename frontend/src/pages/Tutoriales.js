import { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';

import './../styles/components/pages/Tutoriales.css';

const TutorialesPage = (props) => {
    return (
        <main className="holder">
            <h2>Tutoriales</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem dolorum deleniti cum atque,
                distinctio provident mollitia labore odit nihil veritatis dolore. Dignissimos, quaerat veritatis!
                Veritatis adipisci labore dignissimos odio similique!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem dolorum deleniti cum atque,
                distinctio provident mollitia labore odit nihil veritatis dolore. Dignissimos, quaerat veritatis!
                Veritatis adipisci labore dignissimos odio similique!</p>
        </main>
    );
};

export default TutorialesPage;