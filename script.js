// Timeline for Lavender
var lavenderTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-lavender",
        start: "0% 95%",
        end: "70% 50%",
        scrub: true,
        // markers: true,
    }
});

lavenderTimeline
    .to("#product-lavender", {
        top: "88%",
        left: "-7%",
        rotate: "30deg"
    }, 'ecoret')
    .to("#product-chamomile", {
        top: "100%",
        left: "-1%",
        rotate: "30deg"
    }, 'ecoret')
    .to("#product-jasmine", {
        top: "100%",
        left: "-1%",
        rotate: "30deg"
    }, 'ecoret')
    .to("#lavender", {
        top: "169%",
        left: "70%",
        rotate: "-30deg",
        width: "20%"
    }, 'ecoret')
    .to("#jasmine", {
        width: "25%",
        top: "160%",
        right: "-30%",
        rotate: "-15deg"
    }, 'ecoret')
    .to("#chamomile", {
        top: "110%",
        rotate: "130deg",
        left: "-10%"
    }, 'ecoret')
    .to("#lavender2", {
        top: "110%",
        rotate: "130deg",
        left: "-1%"
    }, 'ecoret');

// Timeline for Chamomile
var chamomileTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-chamomile",
        start: "0% 95%",
        end: "70% 50%",
        scrub: true,
        // markers: true,
    }
});

chamomileTimeline
    .to("#product-lavender", {
        top: "203%",
        left: "40%",
        width: "60%",
        zIndex: "1",
        rotate: "-30deg"
    }, 'ecoret')
    .to("#product-chamomile", {
        top: "185%",
        left: "33%",
        width: "70%",
        zIndex: "2",
        rotate: "-30deg"
    }, 'ecoret')
    .to("#product-jasmine", {
        top: "185%",
        left: "33%",
        width: "70%",
        zIndex: "1",
        rotate: "-30deg"
    }, 'ecoret')
    .to("#jasmine", {
        width: "25%",
        top: "250%",
        right: "-30%",
        rotate: "-15deg"
    }, 'ecoret')
    .to("#chamomile", {
        top: "205%",
        rotate: "130deg",
        left: "2%"
    }, 'ecoret');

// Timeline for Jasmine
var jasmineTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-jasmine",
        start: "0% 95%",
        end: "70% 50%",
        scrub: true,
        // markers: true,
    }
});

jasmineTimeline
    .to("#product-jasmine", {
        top: "285%",
        left: "-5%",
        width: "70%",
        zIndex: "2",
        rotate: "30deg"
    }, 'ecoret')
    .to("#product-lavender", {
        top: "300%",
        left: "-2%",
        width: "60%",
        zIndex: "1",
        rotate: "30deg"
    }, 'ecoret')
    .to("#product-chamomile", {
        top: "300%",
        left: "-2%",
        width: "60%",
        zIndex: "1",
        rotate: "30deg"
    }, 'ecoret')
    .to("#jasmine", {
        width: "25%",
        top: "360%",
        right: "0%",
        rotate: "-15deg"
    }, 'ecoret');

// Timeline for Podium
var podiumTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".podium",
        start: "0% 95%",
        end: "70% 50%",
        scrub: true,
        // markers: true,
    }
});

podiumTimeline
    .to("#product-jasmine", {
        top: "430%",
        left: "43%",
        width: "40%",
        zIndex: "1",
        rotate: "0deg"
    }, 'ecoret')
    .to("#product-lavender", {
        top: "408%",
        left: "38%",
        width: "35%",
        zIndex: "1",
        rotate: "0deg"
    }, 'ecoret')
    .to("#product-chamomile", {
        top: "417%",
        left: "18%",
        width: "40%",
        zIndex: "1",
        rotate: "0deg"
    }, 'ecoret');
