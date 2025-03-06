import rmgRuntime from '@railmapgen/rmg-runtime';
import WindowHeader from './window-header';
import { useRootDispatch, useRootSelector } from '../redux';
import { bumpCounter } from '../redux/app/app-slice';
import { useTranslation } from 'react-i18next';
import { RMMantineProvider, RMPage, RMPageBody, RMPageHeader, RMWindow } from '@railmapgen/mantine-components';
import { Button, Text, TextInput } from '@mantine/core';

export default function AppRoot() {
    const { t } = useTranslation();
    const dispatch = useRootDispatch();
    const counter = useRootSelector(state => state.app.counter);

    return (
        <RMMantineProvider>
            <RMWindow>
                <WindowHeader />
                <RMPage>
                    <RMPageHeader>
                        <TextInput label={t('Quick filter')} placeholder={t('Filter anything')} />
                    </RMPageHeader>
                    <RMPageBody direction="column" px="xs">
                        <Text>
                            This is a seed project for RMG with React framework.
                            <br />
                            Please replace any &quot;__APP_NAME__&quot; with your app ID, and replace
                            &quot;__APP_DISPLAY_NAME__&quot; with your app name.
                            <br />
                            Chakra UI and Redux store have been setup already. Here&apos;s an example state: {counter}.
                            <br />
                            <Button onClick={() => dispatch(bumpCounter())}>Bump</Button>
                            <br />
                            RMG Runtime has been setup. Click the button below to open RMG in another tab.
                            <br />
                            <Button onClick={() => rmgRuntime.openApp({ appId: 'rmg' })}>
                                {t('Open')} {t('Rail Map Generator')}
                            </Button>
                        </Text>
                    </RMPageBody>
                </RMPage>
            </RMWindow>
        </RMMantineProvider>
    );
}
