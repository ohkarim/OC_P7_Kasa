import Banner from "../components/Banner/Banner";
import Collapse from "../components/Collapse/Collapse";

import collapseStyles from "../components/Collapse/Collapse.module.css";

import aboutBannerImg from "../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg";

/**
 * @function About - The About component displays the main contents of the about page.
 * @constant {array} collapseData - The array of objects that contains the data to be displayed in the Collapse component.
 * @return {JSX.Element} The rendered component.
 */

function About() {
    const collapseData = [
        {
            id: 1,
            title: "Fiabilité",
            text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        },
        {
            id: 2,
            title: "Respect",
            text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            id: 3,
            title: "Service",
            text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        },
        {
            id: 4,
            title: "Sécurité",
            text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }
    ];

    return (
        <>
            <main>
                <Banner image={aboutBannerImg} text={null} />
                <section className={collapseStyles["collapse--section"]}>
                    {collapseData.map(collapse => (
                        <Collapse
                            key={collapse.id}
                            id={collapse.id}
                            title={collapse.title}
                            text={collapse.text}
                            defaultOpen={false}
                            isList={false}
                            listItems={null}
                        />
                    )
                    )
                    }
                </section>
            </main>
        </>
    );
};


export default About