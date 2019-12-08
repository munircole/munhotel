import { NgModule } from "@angular/core";
import { 
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
} from "@angular/material";

@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule

    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule

    ]
})

export class MaterialModule {}