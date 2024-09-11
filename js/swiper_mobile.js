const breakpoint = window.matchMedia('(min-width: 1024px)')

	let services

	const breakpointChecker = function () {
		if (breakpoint.matches === true) {
			if (services !== undefined) services.destroy(true, true)
			return
		} else if (breakpoint.matches === false) {
			return enableServices()
		}
	}
 
  const enableServices = function () {
     services =  new Swiper(".swiper_mobile", {
      direction: "horizontal",
      slidesPerView: 1.1,
      centeredSlides: true,
      spaceBetween: 10,
  });
  
  }
  breakpoint.addEventListener('change', () => breakpointChecker())

	breakpointChecker()
