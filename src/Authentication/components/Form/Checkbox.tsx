import React, { useState } from 'react'
import { Box, Text } from '../../../components';
import { Feather as Icon } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';

interface Props {
    label: string
}

const Checkbox = ({ label }: Props) => {
    const [checked, setChecked] = useState(false);
    return (
        <RectButton onPress={() => setChecked(c => !c)} style={{ justifyContent: 'center' }}>
            <Box flexDirection="row">
                <Box marginRight="m" height={20} width={20} alignItems="center" justifyContent="center" borderWidth={1} borderColor="primary" borderRadius="s" backgroundColor={checked ? "primary" : "white"}>
                    <Icon name="check" color="white" />
                </Box>
                <Text variant="button">{label}</Text>
            </Box>
        </RectButton>
    )
}

export default Checkbox
