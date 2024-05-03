<script>
    document.addEventListener('DOMContentLoaded', () => {
        const addIframe = (src, width, height, aa) => {
            const iframe = Object.assign(document.createElement('iframe'), {
                src, width, height, frameBorder: 0
            });
            iframe.setAttribute('data-aa', aa);
            return iframe;
        };

        const updateBanner = () => {
            const bannerDivs = document.querySelectorAll('.banner-iframe-selector .banner-iframe');
            bannerDivs.forEach(div => div.style.display = 'none');

            for (const div of bannerDivs) {
                const maxWidth = parseInt(div.getAttribute('data-max-width'));
                const src = div.getAttribute('data-src');
                const aaMatch = src?.match(/\/(\d+)\?/), sizeMatch = src?.match(/size=(\d+)x(\d+)/);

                if (aaMatch && sizeMatch && (window.innerWidth <= maxWidth || !maxWidth)) {
                    const [_, aa] = aaMatch, [__, width, height] = sizeMatch;
                    div.innerHTML = '';
                    div.appendChild(addIframe(src, width, height, aa));
                    div.style.display = 'block';
                    break;
                }
            }
        };

        updateBanner();
        window.addEventListener('resize', updateBanner);
    });

</script>