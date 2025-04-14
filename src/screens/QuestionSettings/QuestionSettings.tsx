import React from "react";
import { Card } from "../../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Button } from "../../components/ui/button";
import { Settings2, BookOpen, FileText } from "lucide-react";

export const QuestionSettings = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full min-h-screen">
      <div className="bg-white w-full max-w-[1280px] py-12 px-4">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Question Settings</h1>
          <p className="text-gray-600">Customize your question generation preferences</p>
        </header>

        <Card className="p-6">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="general" className="flex items-center gap-2">
                <Settings2 className="h-4 w-4" />
                General
              </TabsTrigger>
              <TabsTrigger value="content" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Content
              </TabsTrigger>
              <TabsTrigger value="format" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Format
              </TabsTrigger>
            </TabsList>

            <TabsContent value="general">
              <div className="space-y-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Question Types</h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span>Multiple Choice</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span>True/False</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Short Answer</span>
                    </label>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Difficulty Level</h3>
                  <select className="w-full border rounded-md p-2">
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                  </select>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="content">
              <div className="space-y-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Content Focus</h3>
                  <textarea 
                    className="w-full border rounded-md p-2 h-24"
                    placeholder="Enter specific topics or concepts to focus on..."
                  />
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Keywords</h3>
                  <input 
                    type="text" 
                    className="w-full border rounded-md p-2"
                    placeholder="Enter keywords separated by commas..."
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="format">
              <div className="space-y-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Export Format</h3>
                  <select className="w-full border rounded-md p-2">
                    <option>PDF</option>
                    <option>Word Document</option>
                    <option>Plain Text</option>
                  </select>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Question Layout</h3>
                  <select className="w-full border rounded-md p-2">
                    <option>Standard</option>
                    <option>Compact</option>
                    <option>Detailed</option>
                  </select>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-end mt-8 space-x-4">
            <Button variant="outline">Cancel</Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Save Settings
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};