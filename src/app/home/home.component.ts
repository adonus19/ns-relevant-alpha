import { Component, OnInit } from "@angular/core";
import { isIOS } from "tns-core-modules/platform";
import { Color } from "tns-core-modules/color";
import { DataService, Sermon } from "../shared/data.service";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    sermons: Array<Sermon>;

    constructor(private _itemService: DataService) { }

    ngOnInit(): void {
        this.sermons = this._itemService.getItems();
    }

    onItemLoading(args) {
        // hack to get around issue with RadListView ios background colors: https://github.com/telerik/nativescript-ui-feedback/issues/196
        if (isIOS) {
            var newcolor = new Color("#e6e6e6");
            args.ios.backgroundView.backgroundColor = newcolor.ios;
        }
    }
}
