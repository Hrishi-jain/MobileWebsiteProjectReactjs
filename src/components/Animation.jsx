import React from 'react';

const Animation = () => {

    <div id='image-track' data-mouse-down-at="0" data-prev-percentage='0'></div>
    const track = document.getElementById("image-track");

    window.onmousedown = e => {
        track.dataset.mouseDownAt = "0";
        track.dataset.prevPercentage = track.dataset.percentage;

    }
    window.onmousemove = e => {
        if (track.dataset.mouseDownAt === "0") return;

        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
            maxDelta = window.innerWidth / 2;

        const percentage = (mouseDelta / maxDelta) * -100,
            nextpercentage = parseFloat(track.dataset.prevPercentage) + percentage;
        track.dataset.percentage = nextpercentage;

        track.style.transform = `tramslate(${nextpercentage}%. -50%)`;
        track.animate({
            transform:` translate(${nextpercentage}%, 50%)`
        }, {duration:1200, fill:"forwards"});
        for(const image of track .getElementsByClassName("image")) {
            image.style.objectPosition = `${nextpercentage + 100} 50%`;
            image.animate({
                objectPosition:`${100+ nextpercentage}%  center`
            }, {duration:1200, fill:"forwards"});
        }
    }

    return (
        <div id='image-track' style={{ width: '40vmin', height: '56vmin', objectFit: 'cover', objectPosition: 'center', display: 'flex', gap: '4vmin', position: 'absolute', left: '50%', top: '50%', transform: 'translate(0%, -50%)' }}>
            <img src="https://images.unsplash.com/photo-1587749090881-1ea18126ab3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9iaWxlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            <img src="https://plus.unsplash.com/premium_photo-1663931932521-0207c53c564b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9iaWxlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            <img src="https://images.unsplash.com/photo-1596558450255-7c0b7be9d56a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9iaWxlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            <img src="https://images.unsplash.com/photo-1615494488092-b13b68fe0eb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vYmlsZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
            <img src="https://images.unsplash.com/photo-1615494488092-b13b68fe0eb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vYmlsZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
            <img src="https://images.unsplash.com/photo-1615494488092-b13b68fe0eb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vYmlsZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
            <img src="https://images.unsplash.com/photo-1615494488092-b13b68fe0eb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vYmlsZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
            <img src="https://images.unsplash.com/photo-1615494488092-b13b68fe0eb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vYmlsZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
        </div>

    );
    
}

export default Animation;
