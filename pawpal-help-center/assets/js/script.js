$(document).ready(function () {

    // Function to get query parameters
    function getQueryParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        const param = urlParams.get(name);
        return param ? param.toLowerCase() : null;
    }

    function changeThemeColor(clientName) {
        let themeColor, logoSrc, fontColor, cname;
        switch (clientName) {
            case 'wholetsyourdogout':
                themeColor = '#0FBFAA';
                logoSrc = 'assets/images/logo/wholetsyourdogoutuk.webp';
                cname = 'Who Lets Your Dog Out';
                break;
            case 'amblesidedogwalker':
                themeColor = '#181818';
                logoSrc = 'assets/images/logo/amblesidedogwalker.webp';
                cname = 'Ambleside Dog Walker';
                break;
            case 'oakingtondogdaycare':
                themeColor = '#027D12';
                logoSrc = 'assets/images/logo/oakingtondogdaycare.webp';
                cname = 'Oakington Dog Day Care';
                break;
            case 'pets2impress':
                themeColor = '#A8C0E5';
                logoSrc = 'assets/images/logo/pet2impress.webp';
                cname = 'Pets 2 Impress';
                // fontColor = '#000000';
                break;
            case 'stardogservices':
                themeColor = '#d72004';
                logoSrc = 'assets/images/logo/stardogservices.png';
                cname = 'Star Dog Services';
                break;
            case 'k9adventures':
                themeColor = '#E01775';
                logoSrc = 'assets/images/logo/k9adventures.webp';
                cname = 'k9 Adventures';
                break;
            case 'pawpal':
                themeColor = '#E01775';
                logoSrc = 'assets/images/logo/logo.svg';
                cname = 'PawPal';
                break;
            case 'rkadventures':
                themeColor = '#000000';
                logoSrc = 'assets/images/logo/rkadventures.svg';
                cname = 'RK Adventures';
                break;
            default:
                themeColor = '#E01775'; // Default color
                logoSrc = 'assets/images/logo/logo.svg'; // Default logo
                cname = 'PawPal';
        }


        document.documentElement.style.setProperty('--primary-color', themeColor);
        // if (fontColor) {
        //     document.documentElement.style.setProperty('--bs-white-rgb', fontColor); // Set font color only if defined
        // }
        let urlParams = new URLSearchParams(window.location.search);
        urlParams.set('client', clientName); // Update client name in query params
        let myLinks = document.getElementsByClassName('my-link');
        for (let i = 0; i < myLinks.length; i++) {
            let myLink = myLinks[i];
            // if (myLink) {
            //     myLink.href = `${myLink.href.split('?')[0]}?${urlParams.toString()}`;    //For local server
            // }

            if (myLink) {
                let hrefWithoutQuery = myLink.href.split('?')[0];
                let updatedHref = hrefWithoutQuery.substring(0, hrefWithoutQuery.lastIndexOf('.html')) + '?' + urlParams.toString();    //For live server 
                myLink.href = updatedHref;
            }
        }

        let logoElement = document.getElementById('logo');
        let logoElement1 = document.getElementById('logo1');
        let cnamePlaceholders = document.getElementsByClassName('cnamePlaceholder');

        if (logoElement) {
            logoElement.src = logoSrc;
        }
        if (logoElement1) {
            logoElement1.src = logoSrc;
        }
        if (cnamePlaceholders) {
            for (let i = 0; i < cnamePlaceholders.length; i++) {
                cnamePlaceholders[i].textContent = cname;
            }

        }

    }

    // Function to handle URL changes
    function handleUrlChange() {
        const clientName = getQueryParam('client');
        changeThemeColor(clientName);
    }


    // Initial load
    handleUrlChange();

    // Listen for URL changes
    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);


});
