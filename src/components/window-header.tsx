import { Heading, HStack, IconButton } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { RmgEnvBadge, RmgWindowHeader } from '@railmapgen/rmg-components';
import rmgRuntime from '@railmapgen/rmg-runtime';
import { MdHelp } from 'react-icons/md';

export default function WindowHeader() {
    const { t } = useTranslation();

    const environment = rmgRuntime.getEnv();
    const appVersion = rmgRuntime.getAppVersion();

    return (
        <RmgWindowHeader>
            <Heading as="h4" size="md">
                {t('Seed Project')}
            </Heading>
            <RmgEnvBadge environment={environment} version={appVersion} />

            <HStack ml="auto">
                <IconButton size="sm" variant="ghost" aria-label={t('Help')} title={t('Help')} icon={<MdHelp />} />
            </HStack>
        </RmgWindowHeader>
    );
}
