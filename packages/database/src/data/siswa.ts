import { dbSmartppdb}  from '@workspace/database/client'

export const getSiswa = async (id: string) => {
    return await dbSmartppdb.siswa.findUnique({
        where: {
        id: id
        }
    })
}