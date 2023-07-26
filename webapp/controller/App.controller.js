sap.ui.define([
	"jquery.sap.global",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (jQuery, Controller, JSONModel) {
	"use strict";

	var PageController = Controller.extend("PdfViewTest.controller.App", {

		onInit: function () {
			// this._sValidPath = sap.ui.require.toUrl("sap/m/sample/PdfViewTest") + "/sample.pdf"; // sap.ui.core.URI("webapp/src/dummy.pdf") 
			// this._sInvalidPath = sap.ui.require.toUrl("sap/m/sample/PdfViewTest") + "/sample_nonexisting.pdf";
			this._oModel = new JSONModel({
				Source: "http://s29.q4cdn.com/175625835/files/doc_downloads/test.pdf",
				Title1: "My Title 1",
				Title2: "My Title 2",
				Height: "850px"
			});
			this.getView().setModel(this._oModel);
		},

		onCorrectPathClick: function () {
			this._oModel.setProperty("/Source", this._sValidPath);
		},

		onIncorrectPathClick: function () {
			this._oModel.setProperty("/Source", this._sInvalidPath);
		}
	});

	return PageController;

});

// sap.ui.define(["sap/ui/core/mvc/Controller"],
//     function (Controller) {
//     "use strict";

//     return Controller.extend("PdfViewTest.controller.App", {

//         onInit: function(){

//             var pdfView = this.getView().byId("pdfView");
//             pdfView.setValue("egg.pdf");
//         }

//     });

// });
