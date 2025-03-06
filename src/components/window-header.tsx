import { useTranslation } from 'react-i18next';
import rmgRuntime from '@railmapgen/rmg-runtime';
import { MdOutlineHelpOutline } from 'react-icons/md';
import { RMEnvBadge, RMWindowHeader } from '@railmapgen/mantine-components';
import { ActionIcon, Title } from '@mantine/core';

export default function WindowHeader() {
    const { t } = useTranslation();

    const environment = rmgRuntime.getEnv();
    const appVersion = rmgRuntime.getAppVersion();

    return (
        <RMWindowHeader>
            <Title>{t('__APP_DISPLAY_NAME__')}</Title>
            <RMEnvBadge env={environment} ver={appVersion} />

            <ActionIcon variant="subtle" color="gray" size="sm" aria-label={t('Help')} title={t('Help')} ml="auto">
                <MdOutlineHelpOutline />
            </ActionIcon>
        </RMWindowHeader>
    );
}
