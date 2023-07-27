sap.ui.define([
	"jquery.sap.global",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (jQuery, Controller, JSONModel) {
	"use strict";

	var PageController = Controller.extend("PdfViewTest.controller.App", {

		onInit: function () {
			// Versucht, lokale pdf-Dateien zu laden
			// this._sValidPath = sap.ui.require.toUrl("sap/m/sample/PdfViewTest") + "/sample.pdf"; // sap.ui.core.URI("webapp/src/dummy.pdf") 
			// this._sInvalidPath = sap.ui.require.toUrl("sap/m/sample/PdfViewTest") + "/sample_nonexisting.pdf";
			this._oModel = new JSONModel({
				// Versucht, lokale pdf-Dateien zu laden
				// Source: this._sValidPath,
				Title1: "My Title 1",
				Title2: "My Title 2",
				Height: "850px"
			});
			this.getView().setModel(this._oModel);
		},
		// Versucht, lokale pdf-Dateien zu laden
		// onCorrectPathClick: function () {
		// 	this._oModel.setProperty("/Source", this._sValidPath);
		// },

		// onIncorrectPathClick: function () {
		// 	this._oModel.setProperty("/Source", this._sInvalidPath);
		// }
	});

	return PageController;

});
