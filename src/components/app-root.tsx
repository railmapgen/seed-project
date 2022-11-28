import rmgRuntime from '@railmapgen/rmg-runtime';
import { Button } from '@chakra-ui/react';
import React from 'react';
import WindowHeader from './window-header';
import { useRootDispatch, useRootSelector } from '../redux';
import { bumpCounter } from '../redux/app/app-slice';
import { RmgDebouncedInput, RmgLabel, RmgPage, RmgPageHeader, RmgWindow } from '@railmapgen/rmg-components';
import { useTranslation } from 'react-i18next';

export default function AppRoot() {
    const { t } = useTranslation();
    const dispatch = useRootDispatch();
    const counter = useRootSelector(state => state.app.counter);

    return (
        <RmgWindow>
            <WindowHeader />
            <RmgPage>
                <RmgPageHeader>
                    <RmgLabel label="Quick filter">
                        <RmgDebouncedInput placeholder="Filter anything" />
                    </RmgLabel>
                </RmgPageHeader>
                This is a seed project for RMG with React framework.
                <br />
                Please replace any "RMG Seed Project" or "seed-project" with the correct component name.
                <br />
                Chakra UI and Redux store have been setup already. Here's an example state: {counter}.
                <br />
                <Button onClick={() => dispatch(bumpCounter())}>Bump</Button>
                <br />
                RMG Runtime has been setup. Click the button below to open RMG in another tab.
                <br />
                <Button onClick={() => rmgRuntime.openApp('rmg')}>
                    {t('Open')} {t('Rail Map Generator')}
                </Button>
            </RmgPage>
        </RmgWindow>
    );
}
