import AsyncStorage from '@react-native-async-storage/async-storage';

export interface PatternLEDProps {
    id: string,
    name: string,
    matrix: number[][],
}

export interface StoragePatternLED {
    [id: string] : {
        data: PatternLEDProps
    }
}

export async function savePattern(pattern: PatternLEDProps): Promise<void> {
    try{
        const data =  await AsyncStorage.getItem('@vira:patternsLED');
        const oldPatterns = data ? (JSON.parse(data) as StoragePatternLED) : {}

        const newPattern = {
            [pattern.id]: {
                data: pattern,
            }
        }

        await AsyncStorage.setItem('@vira:patternsLED', 
            JSON.stringify({
                ...newPattern,
                ...oldPatterns
            })
        )
    }catch(error:any){
        throw new Error(error);
    }
}

export async function loadPattern(): Promise<StoragePatternLED> {
    try{
        const data =  await AsyncStorage.getItem('@vira:patternsLED');
        const patterns = data ? (JSON.parse(data) as StoragePatternLED) : {}

       return patterns;
    }catch(error:any){
        throw new Error(error);
    }
}