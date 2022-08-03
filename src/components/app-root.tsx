import { Button } from '@chakra-ui/react';
import React from 'react';
import WindowHeader from './window-header';
import { useRootDispatch, useRootSelector } from '../redux';
import { bumpCounter } from '../redux/app/app-slice';
import { RmgDebouncedInput, RmgLabel, RmgPage, RmgPageHeader, RmgWindow } from '@railmapgen/rmg-components';

export default function AppRoot() {
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
                Chakra UI and Redux store are setup already. Here's an example state: {counter}.
                <br />
                <Button onClick={() => dispatch(bumpCounter())}>Bump</Button>
            </RmgPage>
        </RmgWindow>
    );
}
