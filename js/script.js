$(function () {
	"use strict";

	// preloader
	$(document).ready(function () {
		// Fakes the loading setting a timeout
		setTimeout(function () {
			$("body").addClass("loaded");
		}, 100);
	});

	if ($(window).scrollTop() > 400) $(".header").addClass("sticky");
	else $(".header").removeClass("sticky");

	$(document).ready(function () {
		$(window).scroll(function () {
			if ($(window).scrollTop() > 400) $(".header").addClass("sticky");
			else $(".header").removeClass("sticky");
		});
	});
});
