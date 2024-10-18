// utils/scrollUtil.ts

import { $,browser } from '@wdio/globals';

export async function scrollToElement(selector: string): Promise<void> {
    const element = await $('element');
    if (await element.isDisplayed()) {
        await element.scrollIntoView();
    } else {
        // Optionally, implement a fallback scroll
        await browser.execute((el) => el.scrollIntoView(), element);
    }
}
