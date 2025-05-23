silktideCookieBannerManager.updateCookieBannerConfig({
    background: {
        showBackground: true
    },
    cookieTypes: [
        {
            id: "",
            name: "Необходими",
            description: "<table><tbody><tr data-start=\"609\" data-end=\"707\"><td data-col-size=\"md\" data-start=\"631\" data-end=\"707\">Задължителни за функциониране на сайта. Не могат да бъдат изключени.</td></tr></tbody></table><table><tbody><tr data-start=\"708\" data-end=\"806\"><td data-start=\"708\" data-end=\"730\" data-col-size=\"sm\"></td></tr></tbody></table>",
            required: true,
            onAccept: function () {
                console.log('');
            }
        },
        {
            id: "",
            name: "Функционални\t",
            description: "<table><tbody><tr data-start=\"708\" data-end=\"806\"><td data-col-size=\"md\" data-start=\"730\" data-end=\"806\">Използват се за показване на съдържание като вградени карти и видеа.</td></tr></tbody></table><table><tbody><tr data-start=\"807\" data-end=\"905\"><td data-start=\"807\" data-end=\"829\" data-col-size=\"sm\"></td></tr></tbody></table>",
            required: false,
            onAccept: function () {
                if (typeof gtag === "function") {
                    gtag('consent', 'update', {
                        analytics_storage: 'granted',
                    });
                }
                if (typeof dataLayer !== "undefined") {
                    dataLayer.push({'event': 'consent_accepted_'});
                }
            },
            onReject: function () {
                if (typeof gtag === "function") {
                    gtag('consent', 'update', {
                        analytics_storage: 'denied',
                    });
                }
            }

        },
        {
            id: "",
            name: "Статистически",
            description: "<p>Анонимни данни за използване на сайта, помагат ни да го подобряваме.</p>",
            required: false,
            onAccept: function () {
                console.log('');
            },
            onReject: function () {
                console.log('');
            }
        }
    ],
    text: {
        banner: {
            description: "<p>Използваме бисквитки, за да подобрим Вашето изживяване и да покажем вградено съдържание като Google Карти. Не съхраняваме лични данни. Можете да управлявате своите предпочитания. <a href=\"{% url 'cookies-page' %}\" target=\"_blank\">Политика за бисквитки</a>.</p>",
            acceptAllButtonText: "Приемам всички",
            acceptAllButtonAccessibleLabel: "Accept all cookies",
            rejectNonEssentialButtonText: "Отказвам несъществени",
            rejectNonEssentialButtonAccessibleLabel: "Reject non-essential",
            preferencesButtonText: "Настройки",
            preferencesButtonAccessibleLabel: "Toggle preferences"
        },
        preferences: {
            title: "Персонализирайте предпочитанията си за бисквитки",
            description: "<p data-start=\"190\" data-end=\"368\"><strong data-start=\"190\" data-end=\"368\">Уважаваме Вашето право на поверителност. Можете да изберете да не позволите използването на определени видове бисквитки. Вашите предпочитания ще се прилагат за целия уебсайт.</strong></p>",
            creditLinkText: "Get this banner for free",
            creditLinkAccessibleLabel: "Get this banner for free"
        }
    },
    position: {
        banner: "bottomLeft"
    }
});