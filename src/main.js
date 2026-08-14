import './tailwind.css'
import './style.scss'

document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    const sourceSection = document.querySelector('.golden-musk-source');
    if (sourceSection) {
      const leftIcons = sourceSection.querySelectorAll('.source-icon-left');
      const rightIcons = sourceSection.querySelectorAll('.source-icon-right');

      // Animating left icons towards center (from left to right) on scroll
      if (leftIcons.length > 0) {
        gsap.fromTo(
          leftIcons,
          { x: -120, opacity: 0.4 },
          {
            x: 0,
            opacity: 1,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: sourceSection,
              start: 'top 85%',
              end: 'center 40%',
              scrub: 1.2,
            },
          }
        );
      }

      // Animating right icons towards center (from right to left) on scroll
      if (rightIcons.length > 0) {
        gsap.fromTo(
          rightIcons,
          { x: 120, opacity: 0.4 },
          {
            x: 0,
            opacity: 1,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: sourceSection,
              start: 'top 85%',
              end: 'center 40%',
              scrub: 1.2,
            },
          }
        );
      }
    }

    // Animating laptop image sliding in from left 1 time on scroll
    const laptopImg = document.querySelector('.source-laptop-img');
    if (laptopImg) {
      gsap.fromTo(
        laptopImg,
        { x: -180, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: laptopImg,
            start: 'top 80%',
            once: true,
          },
        }
      );
    }

    // Parallax effect for CRM section images (desktop only >= 1024px)
    const crmSection = document.querySelector('.golden-musk-crm');
    if (crmSection) {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
        const flaconsImg = crmSection.querySelector('.crm-flacons-img');
        const lipsticksImg = crmSection.querySelector('.crm-lipsticks-img');
        const leafMiddleImg = crmSection.querySelector('.crm-leaf-middle-img');
        const leafSmallImg = crmSection.querySelector('.crm-leaf-small-img');
        const leafLargeImg = crmSection.querySelector('.crm-leaf-large-img');

        if (flaconsImg) {
          gsap.to(flaconsImg, {
            y: -320,
            ease: 'none',
            scrollTrigger: {
              trigger: crmSection,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.2,
            },
          });
        }

        if (lipsticksImg) {
          gsap.to(lipsticksImg, {
            y: -750,
            ease: 'none',
            scrollTrigger: {
              trigger: crmSection,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.2,
            },
          });
        }

        if (leafMiddleImg) {
          gsap.to(leafMiddleImg, {
            y: -500,
            rotate: 90,
            ease: 'none',
            scrollTrigger: {
              trigger: crmSection,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.2,
            },
          });
        }

        if (leafSmallImg) {
          gsap.to(leafSmallImg, {
            y: -180,
            rotate: -45,
            ease: 'none',
            scrollTrigger: {
              trigger: crmSection,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.2,
            },
          });
        }

        if (leafLargeImg) {
          gsap.to(leafLargeImg, {
            y:180,
            rotate: 60,
            ease: 'none',
            scrollTrigger: {
              trigger: crmSection,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.2,
            },
          });
        }
      });
    }

    // Animation for Problems section images (left and right slide-in)
    const problemsSection = document.querySelector('.qaplast-problems');
    if (problemsSection) {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
        const problemsLeft = problemsSection.querySelector('.problems-left-img');
        const problemsRight = problemsSection.querySelector('.problems-right-img');

        if (problemsLeft) {
          gsap.fromTo(
            problemsLeft,
            { x: -180, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1.2,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: problemsSection,
                start: 'top 75%',
                once: true,
              },
            }
          );
        }

        if (problemsRight) {
          gsap.fromTo(
            problemsRight,
            { x: 180, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1.2,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: problemsSection,
                start: 'top 75%',
                once: true,
              },
            }
          );
        }
      });
    }

    // Animation for Channels section (cards entrance & drawing lines animation)
    const channelsSection = document.querySelector('.qaplast-channels');
    if (channelsSection) {
      const channelCards = channelsSection.querySelectorAll('.channel-card');
      const centerLogo = channelsSection.querySelector('.channel-center-logo');
      const arrowsDown = channelsSection.querySelectorAll('.channel-arrow-down');
      const arrowRight = channelsSection.querySelector('.channel-arrow-right');
      const arrowLeft = channelsSection.querySelector('.channel-arrow-left');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: channelsSection,
          start: 'top 75%',
          once: true,
        },
      });

      // 1. Cards pop in with stagger
      if (channelCards.length > 0) {
        tl.fromTo(
          channelCards,
          { y: 30, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.4)',
          }
        );
      }

      // 2. Center logo appears with pulse scale
      if (centerLogo) {
        tl.fromTo(
          centerLogo,
          { scale: 0.5, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.7,
            ease: 'back.out(1.6)',
          },
          '-=0.3'
        );
      }

      // 3. Arrow lines draw/reveal (as if being drawn in real-time)
      if (arrowsDown.length > 0) {
        tl.fromTo(
          arrowsDown,
          { clipPath: 'inset(0% 0% 100% 0%)', opacity: 0 },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.inOut',
          },
          '-=0.4'
        );
      }

      if (arrowRight) {
        tl.fromTo(
          arrowRight,
          { clipPath: 'inset(0% 100% 0% 0%)', opacity: 0 },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            opacity: 1,
            duration: 0.8,
            ease: 'power2.inOut',
          },
          '-=0.6'
        );
      }

      if (arrowLeft) {
        tl.fromTo(
          arrowLeft,
          { clipPath: 'inset(0% 0% 0% 100%)', opacity: 0 },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            opacity: 1,
            duration: 0.8,
            ease: 'power2.inOut',
          },
          '-=0.8'
        );
      }

      // 4. Right side image slide-in animation from right
      const channelsRightImg = channelsSection.querySelector('.channels-right-img');
      if (channelsRightImg) {
        tl.fromTo(
          channelsRightImg,
          { x: 180, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.0,
            ease: 'power2.out',
          },
          '-=0.6'
        );
      }
    }

    // Animation for Sales Process card (sequential entrance of card, title, steps, and arrows)
    const salesCard = document.querySelector('.sales-process-card');
    if (salesCard) {
      const salesTitle = salesCard.querySelector('.sales-process-title');
      const flowElements = salesCard.querySelectorAll('.sales-process-steps .sales-step, .sales-process-steps .sales-arrow');

      const tlSales = gsap.timeline({
        scrollTrigger: {
          trigger: salesCard,
          start: 'top 80%',
          once: true,
        },
      });

      // 1. Card container entrance
      tlSales.fromTo(
        salesCard,
        { y: 35, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out' }
      );

      // 2. Title entrance
      if (salesTitle) {
        tlSales.fromTo(
          salesTitle,
          { x: -20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.4, ease: 'power2.out' },
          '-=0.2'
        );
      }

      // 3. Sequential gradual appearance of items and arrows in order
      flowElements.forEach((el) => {
        const isArrow = el.classList.contains('sales-arrow');
        if (isArrow) {
          tlSales.fromTo(
            el,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.22, ease: 'back.out(1.8)' },
            '-=0.08'
          );
        } else {
          tlSales.fromTo(
            el,
            { x: -12, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.3, ease: 'power2.out' },
            '-=0.08'
          );
        }
      });
    }
  }
});