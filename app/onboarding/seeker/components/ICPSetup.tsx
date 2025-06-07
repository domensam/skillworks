"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Key, UserCheck, Lock } from "lucide-react";

export function ICPSetup() {
  const [icpData, setIcpData] = useState({
    identity: "",
    wallet: "",
    verified: false,
  });

  return (
    <div className="space-y-6">
      <div className="grid gap-6">
        {/* Identity Setup */}
        <Card className="p-4">
          <div className="flex items-center gap-4">
            <UserCheck className="w-5 h-5 text-primary" />
            <div className="flex-1">
              <Label>Internet Identity</Label>
              <div className="mt-2 space-y-2">
                <Input
                  placeholder="Enter your Internet Identity"
                  value={icpData.identity}
                  onChange={(e) =>
                    setIcpData({ ...icpData, identity: e.target.value })
                  }
                />
                <Button variant="outline" className="w-full">
                  Connect Internet Identity
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Wallet Setup */}
        <Card className="p-4">
          <div className="flex items-center gap-4">
            <Key className="w-5 h-5 text-primary" />
            <div className="flex-1">
              <Label>ICP Wallet</Label>
              <div className="mt-2 space-y-2">
                <Input
                  placeholder="Enter your wallet address"
                  value={icpData.wallet}
                  onChange={(e) =>
                    setIcpData({ ...icpData, wallet: e.target.value })
                  }
                />
                <Button variant="outline" className="w-full">
                  Connect Wallet
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Verification Status */}
        <Card className="p-4">
          <div className="flex items-center gap-4">
            <Lock className="w-5 h-5 text-primary" />
            <div className="flex-1">
              <Label>Verification Status</Label>
              <div className="mt-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {icpData.verified ? "Verified" : "Not Verified"}
                  </span>
                  <Button
                    variant={icpData.verified ? "outline" : "default"}
                    onClick={() =>
                      setIcpData({ ...icpData, verified: !icpData.verified })
                    }
                  >
                    {icpData.verified ? "Revoke" : "Verify"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Security Info */}
        <Card className="p-4">
          <div className="flex items-center gap-4">
            <Shield className="w-5 h-5 text-primary" />
            <div className="flex-1">
              <Label>Security Information</Label>
              <div className="mt-2 space-y-2 text-sm text-muted-foreground">
                <p>• Your data is stored securely on the Internet Computer</p>
                <p>
                  • Your identity is verified through decentralized
                  authentication
                </p>
                <p>• Your preferences are encrypted and private</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
