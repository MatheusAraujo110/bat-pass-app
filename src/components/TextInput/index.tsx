import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './style';

interface BatTextInput {
    pass: string
}

export function BatTextInput(props: BatTextInput) {
    return (
        <TextInput
            placeholder='pass'
            style={styles.inputer}
            value={props.pass}
        >
        </TextInput>

    );
}