import './style.scss'

const logoBranding = () => {
    const logos = document.querySelectorAll('[logo-branding]') as NodeListOf<HTMLAnchorElement>

    if (!logos) return

    logos?.forEach(logo => {
        logo.addEventListener('contextmenu', (event: MouseEvent) => {
            event.preventDefault()
            if (document.querySelector('.lb-popup')) return
            createPopup(logo);
        })
    })
}

//Création de la popup
const createPopup = (logo: HTMLAnchorElement) => {
    const popup = document.createElement('div')
    popup.classList.add('lb-popup')
    createTargetBlankLink(logo, popup)
    if (logo.hasAttribute('lb-icon-svg') || logo.hasAttribute('lb-icon-png')) createIconLink(logo, popup)
    if (logo.hasAttribute('lb-logo-svg') || logo.hasAttribute('lb-logo-png')) createLogoLink(logo, popup)
    if (logo.hasAttribute('lb-guidlines')) createBrandingLink(logo, popup)
    logo.appendChild(popup)

    deletePopup(popup)
}

//Suppression de la popup au clic en dehors
const deletePopup = (popup: HTMLDivElement) => {
    document.addEventListener("click", (event: MouseEvent) => {
        const target = event.target as Node;

        if (!popup.contains(target)) {
            popup.remove();
        }
    });
}

//Création du lien d'ouverture du lien du logo dans un nouvel onglet
const createTargetBlankLink = (logo: HTMLAnchorElement, popup: HTMLDivElement) => {
    const link = document.createElement('a')
    link.classList.add('lb-target-blank-link')
    link.href = logo.href
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    link.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg> Ouvrir le lien dans un nouvel onglet'
    popup.appendChild(link)
}

//Création des liens de téléchargement de l'icone
const createIconLink = (logo: HTMLAnchorElement, popup: HTMLDivElement) => {
    const container = document.createElement('div')
    container.classList.add('lb-icon')
    container.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/></svg> Télécharger l\'icone'
    if (logo.getAttribute('lb-icon-svg')) {
        const linkSVG = document.createElement('a')
        linkSVG.classList.add('lb-btn')
        const urlSVG = logo.getAttribute('lb-icon-svg') as string
        linkSVG.href = urlSVG
        linkSVG.download = urlSVG
        linkSVG.textContent = 'SVG'
        container.appendChild(linkSVG)
    }
    if (logo.getAttribute('lb-icon-png')) {
        const linkPNG = document.createElement('a')
        linkPNG.classList.add('lb-btn')
        const urlPNG = logo.getAttribute('lb-icon-png') as string
        linkPNG.href = urlPNG
        linkPNG.download = urlPNG
        linkPNG.textContent = 'PNG'
        container.appendChild(linkPNG)
    }
    popup.appendChild(container)
}

//Création des liens de téléchargement du logo
const createLogoLink = (logo: HTMLAnchorElement, popup: HTMLDivElement) => {
    const container = document.createElement('div')
    container.classList.add('lb-logo')
    container.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/></svg> Télécharger le logo'
    if (logo.hasAttribute('lb-logo-svg')) {
        const linkSVG = document.createElement('a')
        linkSVG.classList.add('lb-btn')
        const urlSVG = logo.getAttribute('lb-logo-svg') as string
        linkSVG.href = urlSVG
        linkSVG.download = urlSVG
        linkSVG.textContent = 'SVG'
        container.appendChild(linkSVG)
    }
    if (logo.hasAttribute('lb-logo-png')) {
        const linkPNG = document.createElement('a')
        linkPNG.classList.add('lb-btn')
        const urlPNG = logo.getAttribute('lb-logo-png') as string
        linkPNG.href = urlPNG
        linkPNG.download = urlPNG
        linkPNG.textContent = 'PNG'
        container.appendChild(linkPNG)
    }
    popup.appendChild(container)
}

//Création du lien vers les guidelines de la marque
const createBrandingLink = (logo: HTMLAnchorElement, popup: HTMLDivElement) => {
    const link = document.createElement('a')
    link.classList.add('lb-branding-link')
    link.href = logo.getAttribute('lb-guidelines') as string
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    link.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"/><path d="m8 6 2-2"/><path d="m18 16 2-2"/><path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"/><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg> Voir les guidelines de la marque'
    popup.appendChild(link)
}

logoBranding()
