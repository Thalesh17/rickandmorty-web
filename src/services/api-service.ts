import { ApiResponse, Character, CharacterFilter, Info } from 'rickmortyapi/dist/interfaces';
import { getCharacters } from 'rickmortyapi';

export default function useApiService() {

    const getCharactersApi = async(filters?: CharacterFilter) => {
        try{
            return await getCharacters(filters)
                .then((res: ApiResponse<Info<Character[]>>) => {
                    const data = res.data.results;
                    return  data;
            })
        }catch(e) {
            return e;
        }
    }

    return {
        getCharactersApi
    }
}
