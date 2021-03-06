
const phones = [
    {
        "name": "iPhone7",
        "description": "Well, it's not as easy as that. The iPhone 7 is in many ways a better phone. We can see some of the issues we had with the last iPhone sorted and, no, we are not claiming credit for it - simply acknowledging the fact.",
        "imgAddress": "sources/iPhone7.jpg",
        "type": "phone"
    },
    {
        "name": "Samsung S7",
        "description": "Well, it's not as easy as that. The Samsung S7 is in many ways a better phone. We can see some of the issues we had with the last iPhone sorted and, no, we are not claiming credit for it - simply acknowledging the fact.",
        "imgAddress": "sources/SamsungS7.jpg",
        "type": "phone"
    },
    {
        "name": "Go Pro Hero 5",
        "description": "Well, it's not as easy as that. Go Pro Hero 5 is in many ways a better phone. We can see some of the issues we had with the last iPhone sorted and, no, we are not claiming credit for it - simply acknowledging the fact.",
        "imgAddress": "sources/iPhone7.jpg",
        "type": "camera"
    },
    {
        "name": "Canon EoD 1100D",
        "description": "Well, it's not as easy as that. The Canon EoD 1100D is in many ways a better phone. We can see some of the issues we had with the last iPhone sorted and, no, we are not claiming credit for it - simply acknowledging the fact.",
        "imgAddress": "sources/iPhone7.jpg",
        "type": "camera"
    },
    {
        "name": "iPad",
        "description": "Well, it's not as easy as that. The iPad is in many ways a better phone. We can see some of the issues we had with the last iPhone sorted and, no, we are not claiming credit for it - simply acknowledging the fact.",
        "imgAddress": "sources/iPhone7.jpg",
        "type": "tablet"
    },
    {
        "name": "Samsung Note 4",
        "description": "Well, it's not as easy as that. The Samsung Note 4 is in many ways a better phone. We can see some of the issues we had with the last iPhone sorted and, no, we are not claiming credit for it - simply acknowledging the fact.",
        "imgAddress": "sources/iPhone7.jpg",
        "type": "tablet"
    }
];

new PhoneCatalogueBlockController({
    element: document.body,
    phones: phones
});