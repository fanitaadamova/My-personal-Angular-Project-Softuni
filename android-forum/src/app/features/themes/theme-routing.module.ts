import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../../core/guards/auth.acivate';
import { ThemeAddComponent } from './theme-add/theme-add.component';
import { ThemesAllComponent } from './themes-all/themes-all.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { ThemesSearchComponent } from './themes-search/themes-search.component';


const routes: Routes = [
    {
        path: 'themes',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: ThemesAllComponent
            },
            {
                path: ':themeId',
                component: ThemeDetailsComponent
            }
        ]
    },
    {
        path: 'add-theme',
        component: ThemeAddComponent,
        canActivate: [AuthActivate]
    },
    {
        path: 'search',
        component: ThemesSearchComponent
    },
    {
        path: 'post/edit/:postId',
        component: PostEditComponent,
        canActivate: [AuthActivate]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemeRoutingModule { }