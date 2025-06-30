'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">letras-y-mareas documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AdminAuthComponent.html" data-type="entity-link" >AdminAuthComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminComponent.html" data-type="entity-link" >AdminComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminForgottenPasswordComponent.html" data-type="entity-link" >AdminForgottenPasswordComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminLoginComponent.html" data-type="entity-link" >AdminLoginComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AppComponent.html" data-type="entity-link" >AppComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ArrowRightFromBracketComponent.html" data-type="entity-link" >ArrowRightFromBracketComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BookComponent.html" data-type="entity-link" >BookComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CalendarDaysComponent.html" data-type="entity-link" >CalendarDaysComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CardComponent.html" data-type="entity-link" >CardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CardsListComponent.html" data-type="entity-link" >CardsListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ClockComponent.html" data-type="entity-link" >ClockComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CommentComponent.html" data-type="entity-link" >CommentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CommentsComponent.html" data-type="entity-link" >CommentsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DashboardComponent.html" data-type="entity-link" >DashboardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EventFormComponent.html" data-type="entity-link" >EventFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EventsComponent.html" data-type="entity-link" >EventsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EventsComponent-1.html" data-type="entity-link" >EventsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FooterComponent.html" data-type="entity-link" >FooterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ForgottenPasswordComponent.html" data-type="entity-link" >ForgottenPasswordComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FormControlErrorsComponent.html" data-type="entity-link" >FormControlErrorsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderComponent.html" data-type="entity-link" >HeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HomeComponent.html" data-type="entity-link" >HomeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InstagramComponent.html" data-type="entity-link" >InstagramComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LocationDotComponent.html" data-type="entity-link" >LocationDotComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoginComponent.html" data-type="entity-link" >LoginComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MainComponent.html" data-type="entity-link" >MainComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NavbarComponent.html" data-type="entity-link" >NavbarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NavItemComponent.html" data-type="entity-link" >NavItemComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PenToSquareComponent.html" data-type="entity-link" >PenToSquareComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProfileComponent.html" data-type="entity-link" >ProfileComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RegisterComponent.html" data-type="entity-link" >RegisterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ReviewCardComponent.html" data-type="entity-link" >ReviewCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ReviewDetailComponent.html" data-type="entity-link" >ReviewDetailComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ReviewFormComponent.html" data-type="entity-link" >ReviewFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ReviewsComponent.html" data-type="entity-link" >ReviewsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ReviewsComponent-1.html" data-type="entity-link" >ReviewsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SectionTitleComponent.html" data-type="entity-link" >SectionTitleComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/StarComponent.html" data-type="entity-link" >StarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/StarsRatingComponent.html" data-type="entity-link" >StarsRatingComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UserComponent.html" data-type="entity-link" >UserComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EventService.html" data-type="entity-link" >EventService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReviewService.html" data-type="entity-link" >ReviewService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Book.html" data-type="entity-link" >Book</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Comment.html" data-type="entity-link" >Comment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NavItem.html" data-type="entity-link" >NavItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Review.html" data-type="entity-link" >Review</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Session.html" data-type="entity-link" >Session</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});