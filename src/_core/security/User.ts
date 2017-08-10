class User {
    private _name: string;
    private _permissions: string[];

    constructor(name: string, permissions: string[]) {
        this._name = name;
        this._permissions = permissions;
    }

    get name(): string {
        return this._name;
    }

    public authorize(requiredPermissions: string[]): boolean {
        if (!requiredPermissions) {
            return true;
        }

        for (const requiredPermission of requiredPermissions) {
            let hasPermission = false;

            for (const permission of this._permissions) {
                hasPermission = hasPermission || permission === requiredPermission;
                if (hasPermission) {
                    break;
                }
            }

            if (!hasPermission) {
                return false;
            }
        }
        return true;
    }
}

export default User;