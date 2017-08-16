class User {
    private _name: string;
    private _permissions: string[];

    constructor(name: string, permissions: string[]) {
        this._name = name;
        this._permissions = permissions || [];
    }

    get name(): string {
        return this._name;
    }

    public authorize(requiredPermissions: string[]): boolean {
        if (!requiredPermissions) {
            return true;
        }
        for (const requiredPermission of requiredPermissions) {
            if (!this.hasPermission(requiredPermission)) {
                return false;
            }
        }
        return true;
    }

    private hasPermission(requiredPermission: string): boolean {
        let hasPermission = false;
        for (const permission of this._permissions) {
            hasPermission = hasPermission || permission === requiredPermission || !permission;
            if (hasPermission) {
                return true;
            }
        }
        return false;
    }
}

export default User;
