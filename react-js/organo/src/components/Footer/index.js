import './Footer.css';

const Footer = () => {
    return (
        <footer className='page-footer'>
            <section className='social-media'>
                <a href="#" target="_blank">
                    <img src='../../../img/fb.png' alt='Logo do Facebook' />
                </a>
                <a href="#" target="_blank">
                    <img src='../../../img/tw.png' alt='Logo do Twitter' />
                </a>
                <a href="#" target="_blank">
                    <img src='../../../img/ig.png' alt='Logo do Instagram' />
                </a>
            </section>
            <section className='logo'>
                <img src='../../../img/logo.png' alt='Logo do Organo'/>
            </section>
            <section className='copyright'>
                <p>Desenvolvido por Alura.</p>
            </section>
        </footer>    
    );
}

export default Footer;