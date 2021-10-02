import { LitElement } from 'lit';
import Navigo from 'navigo';
export declare class App extends LitElement {
    router: Navigo;
    private page;
    name: string;
    connectedCallback(): void;
    static styles: import("lit").CSSResult;
    get Page(): any;
    set Page(page: any);
    render(): import("lit-html").TemplateResult<1>;
}
