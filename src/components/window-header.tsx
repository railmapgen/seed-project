import React from 'react';
import { Heading } from '@chakra-ui/react';
import { getEnvironment, getVersion } from '../util/config';
import { useTranslation } from 'react-i18next';
import { RmgEnvBadge, RmgWindowHeader } from '@railmapgen/rmg-components';

export default function WindowHeader() {
    const { t } = useTranslation();

    const environment = getEnvironment();

    return (
        <RmgWindowHeader>
            <Heading as="h4" size="md">
                {t('Seed Project')}
                <RmgEnvBadge environment={environment} version={getVersion()} />
            </Heading>
        </RmgWindowHeader>
    );
}
