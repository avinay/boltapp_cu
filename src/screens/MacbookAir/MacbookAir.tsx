import {
  FileIcon,
  FileSpreadsheetIcon,
  ListIcon,
  Wand2Icon,
} from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const MacbookAir = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full min-h-screen">
      <div className="bg-white w-full max-w-[1280px] py-12 px-4">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Create AI-Powered Questions
          </h1>
          <p className="text-gray-600">
            Upload your PDF document and let our AI generate comprehensive
            questions for you
          </p>
        </header>

        <Card className="border border-dashed border-gray-300 p-8 mb-12">
          <CardContent className="flex flex-col items-center justify-center p-6">
            <div className="bg-indigo-100 p-4 rounded-lg mb-4">
              <FileIcon className="h-12 w-12 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold mb-1">Drop your PDF here</h3>
            <p className="text-gray-500 mb-4">
              or click to browse from your computer
            </p>

            <Button className="bg-indigo-600 hover:bg-indigo-700 mb-6">
              <FileIcon className="h-4 w-4 mr-2" />
              Browse Files
            </Button>

            <div className="text-sm text-gray-500">
              <p>Supported format: PDF</p>
              <p>Maximum file size: 10MB</p>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 transition-all duration-300 hover:bg-purple-600 group">
            <CardContent className="flex flex-col items-center text-center p-4">
              <div className="bg-blue-100 p-3 rounded-lg mb-4 group-hover:bg-purple-600">
                <Wand2Icon className="h-8 w-8 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-white">AI-Powered Generation</h3>
              <p className="text-sm text-gray-600 group-hover:text-white">
                Automatically generate relevant questions from your content
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 transition-all duration-300 hover:bg-purple-600 hover:scale-110 hover:shadow-xl group">
            <CardContent className="flex flex-col items-center text-center p-4">
              <div className="bg-purple-100 p-3 rounded-lg mb-4 group-hover:bg-purple-600">
                <ListIcon className="h-8 w-8 text-purple-600 group-hover:text-white" />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-white">Multiple Question Types</h3>
              <p className="text-sm text-gray-600 group-hover:text-white">
                Create various types of questions including MCQ, true/false, and
                more
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 transition-all duration-300 hover:bg-purple-600 group">
            <CardContent className="flex flex-col items-center text-center p-4">
              <div className="bg-green-100 p-3 rounded-lg mb-4 group-hover:bg-purple-600">
                <FileSpreadsheetIcon className="h-8 w-8 text-green-600 group-hover:text-white" />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-white">Easy Export</h3>
              <p className="text-sm text-gray-600 group-hover:text-white">
                Export your questions in multiple formats
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};