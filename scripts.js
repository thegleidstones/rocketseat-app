const DOM = {
    logo: document.querySelector('div.logo'),
    home: document.querySelector('div.home'),
    perfil: document.querySelector('div.perfil'),
    discover: document.querySelector('div.discover'),
    linkHome: document.querySelector('a#home'),
    linkPerfil: document.querySelector('a#perfil'),
    linkDiscover: document.querySelector('a#discover'),
    
    activeHome() {
        DOM.linkPerfil.classList.remove('active')
        DOM.linkDiscover.classList.remove('active')
        DOM.linkHome.classList.add('active')
        
        DOM.perfil.classList.remove('active')
        DOM.discover.classList.remove('active')
        DOM.home.classList.add('active')
    },

    activePerfil() {
        DOM.linkDiscover.classList.remove('active')
        DOM.linkHome.classList.remove('active')
        DOM.linkPerfil.classList.add('active')

        DOM.discover.classList.remove('active')
        DOM.home.classList.remove('active')
        DOM.perfil.classList.add('active')
    },

    activeDiscover() {
        DOM.linkPerfil.classList.remove('active')
        DOM.linkHome.classList.remove('active')
        DOM.linkDiscover.classList.add('active')

        DOM.perfil.classList.remove('active')
        DOM.home.classList.remove('active')
        DOM.discover.classList.add('active')
    }
}

const Listeners = {
    addListeners() {
        DOM.logo.addEventListener('click', DOM.activeHome)
        DOM.linkHome.addEventListener('click', DOM.activeHome),
        DOM.linkPerfil.addEventListener('click', DOM.activePerfil),
        DOM.linkDiscover.addEventListener('click', DOM.activeDiscover)
    }
}

Listeners.addListeners()
//DOM.activeHome()