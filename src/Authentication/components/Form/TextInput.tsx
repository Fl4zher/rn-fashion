import React, { useState } from 'react'
import { StyleSheet, TextInput as Input, TextInputProps } from 'react-native'
import { Box, theme } from '../../../components'
import { Feather as Icon } from '@expo/vector-icons'

interface Props extends TextInputProps {
    placeholder: string;
    icon: string;
}

const SIZE = theme.borderRadii.m * 2;

const TextInput = ({ icon, ...props }: Props) => {
    const reColor = "danger";
    const color = theme.colors[reColor];
    return (
        <Box padding="s" flexDirection="row" height={48} borderRadius="s" borderColor={reColor} borderWidth={StyleSheet.hairlineWidth} alignItems="center">
            <Box padding="s">
                <Icon name={icon as any} size={16} {...{ color }} />
            </Box>
            <Box flex={1}>

                <Input underlineColorAndroid="transparent" placeholderTextColor={color} {...props} />
            </Box>
            {
                (false) && (
                    <Box height={SIZE} width={SIZE} borderRadius="m" backgroundColor={reColor} alignItems="center" justifyContent="center" >
                        <Icon name={true ? "check" : "x"} color="white" size={16} />
                    </Box>
                )
            }
        </Box>
    )
}

export default TextInput
