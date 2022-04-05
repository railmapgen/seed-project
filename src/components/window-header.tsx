import React from 'react';
import { Badge, Flex, Heading } from '@chakra-ui/react';
import { Environments, getEnvironment, getVersion } from '../util/config';
import { useTranslation } from 'react-i18next';

export default function WindowHeader() {
    const { t } = useTranslation();

    const environment = getEnvironment();
    const getBadgeColour = (env: Environments) => {
        switch (env) {
            case Environments.DEV:
                return 'red';
            case Environments.UAT:
                return 'orange';
            case Environments.PRD:
                return 'green';
        }
    };
    return (
        <Flex pl={2} pr={2} pb={1} pt={1} align="center">
            <Heading as="h4" size="md" mr="auto">
                {t('WindowHeader.heading')}
                <Badge ml={1} colorScheme={getBadgeColour(environment)}>
                    {environment === Environments.PRD ? getVersion() : environment}
                </Badge>
            </Heading>
        </Flex>
    );
}
