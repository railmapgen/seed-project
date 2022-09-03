import React from 'react';
import { Heading, HStack, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { getEnvironment, getVersion } from '../util/config';
import { useTranslation } from 'react-i18next';
import { RmgEnvBadge, RmgWindowHeader } from '@railmapgen/rmg-components';
import { LanguageCode } from '@railmapgen/rmg-translate';
import i18n from '../i18n/config';
import rmgRuntime from '@railmapgen/rmg-runtime';
import { MdTranslate } from 'react-icons/md';

export default function WindowHeader() {
    const { t } = useTranslation();

    const environment = getEnvironment();

    const handleChangeLanguage = async (language: LanguageCode) => {
        await i18n.changeLanguage(language);
        rmgRuntime.setLanguage(language);
        document.documentElement.lang = language;
    };

    return (
        <RmgWindowHeader>
            <Heading as="h4" size="md">
                {t('Seed Project')}
                <RmgEnvBadge environment={environment} version={getVersion()} />
            </Heading>

            <HStack ml="auto">
                <Menu>
                    <MenuButton as={IconButton} icon={<MdTranslate />} variant="ghost" size="sm" />
                    <MenuList>
                        <MenuItem onClick={() => handleChangeLanguage(LanguageCode.English)}>English</MenuItem>
                        <MenuItem onClick={() => handleChangeLanguage(LanguageCode.ChineseSimp)}>简体中文</MenuItem>
                        <MenuItem onClick={() => handleChangeLanguage(LanguageCode.ChineseTrad)}>繁體中文</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
        </RmgWindowHeader>
    );
}
