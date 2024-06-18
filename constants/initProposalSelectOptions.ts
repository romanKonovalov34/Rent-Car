import { DictCodes, IDictionaryDto } from "@/types/types"

export const initCityCurrentOption = (name: string = "Город"): IDictionaryDto => {
    return {
        id: 0,
        categoryId: 0,
        code: '',
        name,
        dictCode: DictCodes.CITIES,
        createdAt: '',
        updatedAt: '',
    }
}

export const initAutoCategoryCurrentOption = (name: string = "Марка", code: string = "autoCategory"): IDictionaryDto => {
    return {
        id: 0,
        categoryId: 0,
        code,
        name,
        dictCode: DictCodes.AUTO_CATEGORIES,
        createdAt: '',
        updatedAt: '',
    }
}

export const initModelCurrentOption = (name: string = "Модель", code: string = "model"): IDictionaryDto => {
    return {
        id: 0,
        categoryId: 0,
        code,
        name,
        dictCode: DictCodes.AUTO,
        createdAt: '',
        updatedAt: '',
    }
}