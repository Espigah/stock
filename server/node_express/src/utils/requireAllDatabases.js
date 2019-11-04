import requireAll from 'require-all';
import path from 'path';



export default (resolve, dirname = '../database') => {
    requireAll({
        dirname: path.resolve(path.join(__dirname, dirname)),
        filter: /(db)\.js$/,
        excludeDirs: /^\.(git|svn)$/,
        recursive: true,
        resolve: function (dbInfo) {
        
            let moduleData = dbInfo.default || dbInfo;
            if (!moduleData.name) {
                console.warn("Database without name", moduleData)
                return
            }
            resolve(moduleData)
            return moduleData;
        }
    });

}